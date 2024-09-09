import Head from "next/head";
import Link from "next/link";
import { gql } from "@apollo/client";

import { getApolloClient } from "../../lib/apollo-client";
import parse from "html-react-parser";
import styles from "../../styles/Home.module.css";
import categoryStyles from './category.module.css'

const LENGTH = 100;

export default function Category({ posts, slug, categorySeo, ...props }) {

    const postExcerptShorten = (excerpt) => {
        const newExcerpt = excerpt ? `${excerpt.substring(0, LENGTH)} [...]</p>` : excerpt
        return newExcerpt
    }
    const title = slug.replace(/-/g, " ")
    const fullHead = categorySeo?.fullHead ? parse(categorySeo?.fullHead) : null;
    // return <></>
    return (
        <div className={styles.container}>
            <Head>
                {fullHead}
            </Head>
            <div className={categoryStyles.background} />
            <main className={styles.main}>

                <h1 className={styles.title}>{title.charAt(0).toUpperCase()
                    + title.slice(1)}</h1>
                <div className={categoryStyles.container}>
                    <ul className={`${styles.grid} ${categoryStyles.grid}`}>
                        {posts &&
                            posts.length > 0 &&
                            posts.map((post) => {
                                return (
                                    <>
                                        <li key={post.uri} className={`${styles.card} `}>
                                            <Link href={post.uri}>
                                                <a>
                                                    <h3>{post.title}</h3>
                                                    <div
                                                        className={styles.excerpt}
                                                        dangerouslySetInnerHTML={{
                                                            __html: postExcerptShorten(post.excerpt),
                                                        }}
                                                    />
                                                </a>
                                            </Link>
                                        </li>
                                    </>
                                );
                            })}

                        {!posts ||
                            (posts.length === 0 && (
                                <li>
                                    <p>Oops, no posts found!</p>
                                </li>
                            ))}
                    </ul>
                </div>
            </main>
        </div>)

}


export async function getStaticProps({ params, locale, ...props }) {
    const { categorySlug } = params;
    const language = locale.toUpperCase();

    const apolloClient = getApolloClient();
    let databaseId = ""
    let databaseIdQuery
    try {
        databaseIdQuery = await apolloClient.query({
            query: gql`
        query getCatId($categorySlug: [String])
        {
            categories(where: {slug: $categorySlug}) {
                nodes {
                    databaseId
                }
            }
        }`
            ,
            variables: {
                categorySlug
            }
        });
        databaseId = databaseIdQuery?.data?.categories?.nodes[0]?.databaseId;
    } catch (err) {

    }

    console.log("databaseIdQuery?.data", databaseIdQuery?.data)
    // if (!databaseId) {
    //     return {
    //         notFound: true,
    //     };
    // }
    let categoryTranslationsData
    try {
        categoryTranslationsData = await apolloClient.query({
            query: gql`
            query getTranslationsForCategory($id: ID!, $language: LanguageCodeEnum!) 
                {
                generalSettings {
                title
                }
                category(id: $id, idType: DATABASE_ID) {
                    seo {
                        fullHead
                        metaDesc
                        metaKeywords
                    }
                    translation(language: $language) {
                        slug
                        posts {
                            nodes {
                                slug
                                uri
                                title
                                excerpt
                            }
                        }
                    }
                    language {
                        code
                    }
                }
            }
        `,
            variables: {
                id: databaseId,
                language,
            },
        });
    } catch (err) {
        categoryTranslationsData = ""
    }

    const categoryTranslations = categoryTranslationsData?.data?.category || {};
    const posts = categoryTranslations?.translation?.posts?.nodes || [];
    const site = categoryTranslationsData?.data?.generalSettings || {};

    if (categoryTranslations?.language?.code && language !== categoryTranslations.language.code) {
        return {
            redirect: {
                destination: `/category/${categoryTranslations.translation.slug}`
            },
        };
    }

    return {
        props: {
            posts,
            language,
            path: `/${categoryTranslations?.translation?.slug || ''}`,
            site,
            slug: categoryTranslations?.translation?.slug || '',
            categorySeo: categoryTranslations?.seo || null
        },
        revalidate: 10,
    };
}

export async function getStaticPaths({ locales, defaultLocale, ...props }) {
    const apolloClient = getApolloClient();

    const data = await apolloClient.query({
        query: gql`
        {
        posts(first: 10000) {
          edges {
            node {
              id
              title
              slug
            }
          }
        }
      }
      `,
        // variables: {
        //     language: defaultLocale.toUpperCase(), //language
        // }
    });

    const posts = (data?.data?.posts?.edges || []).map(({ node }) => node);

    const paths = posts.map(({ slug }) => {
        return {
            params: {
                categorySlug: slug,
            },
        };
    });

    return {
        paths: [
            ...paths,
        ],
        fallback: "blocking",
    };
}