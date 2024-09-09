import Head from "next/head";
import Link from "next/link";
import { gql } from "@apollo/client";
import Image from "next/image";
import { getApolloClient } from "../lib/apollo-client";
import categoryStyles from '../styles/index.module.css'
import styles from "../styles/Home.module.css";

export default function Home({ categories, page }) {
  const { title, description } = page;
  console.log("categories:", categories);
  const Categories = () => <ul className={styles.categories}>{(categories || []).map(({ node: item }) => {
    return (
      <li key={`/category/${item.slug}`}
      //className={styles.card}
      >
        <Link href={`/category/${item.slug}`}>
          <a>
            <h3
            >{item.name}</h3>
          </a>
        </Link>
      </li>
    )
  })
  }</ul>

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Categories />

      <main className={categoryStyles.main}>
        <div className={categoryStyles.background} />
        <p className={styles.description}>{description}</p>

        <ul className={styles.grid}>
          {categories &&
            categories.length > 0 &&
            categories.map(({ node: category }) => {
              return category.posts.nodes.length ?
                (
                  <div key={category.slug}>
                    <Link href={`/category/${category.slug}`} className={categoryStyles.link}>
                      <h3 className={`${categoryStyles.h3} ${categoryStyles.link}`}>{category.description}</h3>
                    </Link>

                    <ul className={categoryStyles.postExcerptContainer}>
                      {category.posts.nodes && category.posts.nodes.map((post) => {

                        return (
                          <li key={post.name} className={categoryStyles.postExcerpt} >
                            <Link href={post.uri}>
                              <a>
                                {post.featuredImage?.node?.sourceUrl &&
                                  <div>
                                    <Image
                                      src={post.featuredImage?.node?.sourceUrl ?? "/images/laura1.jpg"}
                                      // fill
                                      // layout='fill'
                                      width={1200}
                                      height={800}
                                      alt={post.title}
                                      // className="absolute rounded-md h-full w-full object-cover"
                                      className={styles.featuredImage}
                                    />
                                  </div>}
                                <h3
                                  dangerouslySetInnerHTML={{
                                    __html: post.title,
                                  }}
                                />
                                <div
                                  className={styles.excerpt}
                                  dangerouslySetInnerHTML={{
                                    __html: post.excerpt,
                                  }}
                                />
                              </a>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                ) : null
            })}
        </ul>
      </main>
    </div >
  );
}

export async function getStaticProps({ locale }) {
  const apolloClient = getApolloClient();
  // console.log("process", process.env)
  const language = locale.toUpperCase();

  const getPostsForEachCategory = await apolloClient.query({
    query: gql`
      query postsForEachCategory($language: LanguageCodeFilterEnum!) {
       generalSettings {
          title
          description
        }
        categories(where: {language: $language}) {
          edges {
            node {
              name
              slug
              description
              posts {
                nodes {
                  title
                  slug
                  excerpt(format: RENDERED)
                  uri
                  featuredImage {
                    node {
                      sourceUrl(size: LARGE)
                    }
                  }
                }
              }
            }
          }
        }
      }`,
    variables: {
      language,
    },
  })


  const categories = getPostsForEachCategory?.data.categories.edges
  // let posts = data?.data.posts.edges
  // const posts = getPostsForEachCategory?.data.categories.nodes

  // .map(({ node }) => node)


  const page = {
    ...getPostsForEachCategory?.data.generalSettings,
  };

  return {
    props: {
      page,
      // posts,
      categories: categories
    },
  };
}
