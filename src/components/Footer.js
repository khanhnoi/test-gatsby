import React from 'react';
import { FooterWrapper, NavWrapper } from '../elements';
import { useStaticQuery, Link, graphql  } from "gatsby";

export const Footer = () => {
    // const data = useStaticQuery(graphql`
    //     query  {
    //         logo: file(relativePath: {eq: "logo.svg"}) {
    //             publicURL
    //         }
    //     }
    // `)

    // console.log('data', data)
    return (
        <FooterWrapper>
           footer
        </FooterWrapper>
    )
}