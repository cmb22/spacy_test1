import Head from "next/head";
import Link from "next/link";
import { gql } from "@apollo/client";
import { getApolloClient } from "../lib/apollo-client";
import parse from "html-react-parser";

import styles from "../styles/Home.module.css";

export default function Post({ post, site, language, ...props }) {
  // console.log("post", post)
  const fullHead = post?.seo?.fullHead ? parse(post?.seo?.fullHead) : null;
  return (
    <div className={styles.container}>
      {fullHead && <Head>{fullHead}</Head>}
      <main className={styles.main}>
        <h1 className={styles.title} style={{ "marginTop": "var(--wp--preset--spacing--10)" }}>{post.translation.title}</h1>

        <div className={styles.grid}>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{
              __html: post.translation.content,
            }}
          />
        </div>

        <p className={styles.backToHome}>
          <Link href="/">
            <a className={styles.back}>&lt; Back To Home</a>
          </Link>
        </p>
      </main>
    </div>
  );
}

export async function getStaticProps({ params, locale, ...props }) {
  const { postSlug } = params;
  const language = locale.toUpperCase();
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: gql`
      query PostBySlug($slug: String!, $language: LanguageCodeEnum!) {
        generalSettings {
          title
        }
        postBy(slug: $slug) {
          id
          content
          title
          slug
          language {
            slug
          }
            seo {
                fullHead
                metaDesc
                metaKeywords
                title
            }
          translation(language: $language) {
            id
            slug
            content
            title
            
            language {
              locale
              slug
            }
          }
        }
      }
    `,
    variables: {
      slug: params.postSlug,
      language,
    },
  });
  const site = {
    ...data?.data.generalSettings,
  };
  let post = data?.data.postBy;
  if (post?.language?.slug && locale !== post.language.slug) {
    return {
      redirect: {
        destination: `/${post.translation.slug}`
      },
      props: {
        post,
        language,
        path: post?.translation?.slug ? `/${post.translation.slug}` : params.postSlug,
        site,
      },
      revalidate: 10,
    };
  }




  return {
    props: {
      post,
      language,
      path: post?.translation?.slug ? `/${post.translation.slug}` : params.postSlug,
      site,
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
  });

  const posts = data?.data.posts.edges.map(({ node }) => node);

  const paths = posts.map(({ slug }) => {
    return {
      params: {
        postSlug: slug,
      },
    };
  });


  return {
    paths: [],
    fallback: "blocking",
  };
}
