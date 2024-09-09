import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../components/Navbar.module.css"
import { getApolloClient } from "../lib/apollo-client";
import { gql } from "@apollo/client";
import { useEffect, useState } from "react"

import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const GetPostLanguages = gql`
query newQuery($uri: String!) {
  nodeByUri(uri: $uri) {
    __typename
    ... on Post {
      language {
        code
      }
      translations {
        slug
        language {
          code
          slug
        }
      }
    }
  }
}`

export default function Navbar(props) {
  const routeProps = useRouter();
  const { locale: activeLocale, locales, asPath } = routeProps
  // console.log("locales", locales, activeLocale)
  const [currentPostAvailLanguages, setCurrentPostAvailLanguages] = useState(locales)

  const { query } = getApolloClient();
  const fn = async () => {
    const { data } = await query({
      query: GetPostLanguages,
      variables: {
        uri: asPath
      }

    })
    console.log("data", data)
    if (data?.nodeByUri?.translations) {
      const languages = data?.nodeByUri?.translations.map((item) => item.language.slug).sort()
      // console.log("languages", languages)
      setCurrentPostAvailLanguages(languages)
    } else {
      const availLocals = locales.filter((item) => item !== activeLocale).sort()
      // console.log("availLocals", availLocals, activeLocale)
      setCurrentPostAvailLanguages(availLocals)
    }

  }
  const onSelectChange = (e) => {
    const locale = e.target.value;

    routeProps.push(asPath, asPath, {
      locale,
      scroll: false
    })
    // fn()
  }
  useEffect(() => {
    fn()
  }, [asPath, activeLocale])

  return (
    <div className="container">

      <nav>

        <ul>
          <li>
            <Link href="/">
              <a className={styles.home}>Blog</a>
            </Link>
          </li>

        </ul>
        <FormControl >
          <Select
            sx={{
              boxShadow: 'none',
              '.MuiOutlinedInput-notchedOutline': { border: 0 },
              borderRadius: 0,
              "& .MuiOutlinedInput-notchedOutline": {
                border: 0
              },
              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "none"
              }
            }}
            // className="max-w-xs"
            onChange={onSelectChange}
            label={"activeLocale"}
            value={activeLocale}
          >

            <MenuItem key={activeLocale} value={activeLocale}>
              {activeLocale.toUpperCase()}
            </MenuItem>
            {currentPostAvailLanguages
              .map((item) =>
                <MenuItem key={item} value={item}>
                  {item.toUpperCase()}
                </MenuItem>
              )}
          </Select>
        </FormControl>
      </nav>
    </div>
  );
}
