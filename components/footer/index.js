import React from 'react';

import constants from '../../constants';

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer__social">
          <div>N'hésitez pas à partager ce site sur les réseaux sociaux</div>
          <div className="separator">➞</div>
          <div>
            <div>
              <a
                href="https://twitter.com/intent/tweet?text=https://solidarite-numerique.fr/"
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/social/twitter.svg"
                  alt="Twitter"
                  className="icon icon-twitter"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://solidarite-numerique.fr"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/social/facebook.svg"
                  alt="Facebook"
                  className="icon icon-facebook"
                />
              </a>
            </div>
            <div>
              <a
                href="mailto:exemple@adresse-mail.com?subject=Solidarite-numerique&body=https://solidarite-numerique.fr"
                title="Partager par email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/social/email.svg"
                  alt="Email"
                  className="icon icon-mail"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="container content-container">
          <div className="partenaire layout-center">
            <a
              href="https://www.lamednum.coop/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="/images/logo/logo_mednum.svg"
                alt="Une initiative de la MedNum"
              />
            </a>
            <a
              href="https://www.gouvernement.fr/le-secretariat-d-etat-charge-du-numerique/"
              rel="noopener noreferrer"
              target="_blank"
            >
              avec le soutien du
              <img
                className="logo"
                src="/images/logo/logo_secnum.svg"
                alt="En partenariat avec le gouvernement"
              />
            </a>
          </div>
          <ul className="footer__links">
            <li>
              <a href="/contact">Nous contacter</a>
            </li>
            <li>
              <a href="/mentions-legales">Mentions Légales</a>
            </li>
            <li>
              <a href="/a-propos">Qui sommes-nous ?</a>
            </li>
            <li>
              <a href="/vie-privee">Politique de confidentialité</a>
            </li>
          </ul>
        </div>
      </footer>
      <style jsx>{`
        #footer {
          background: #EBEFF3;
          color: #26353F;
          font-size: 0.9rem;
          padding: 0 0 2rem 0;
        }

        a {
          opacity: 0.7;
          text-decoration: none;
          color: #272c32;
          display: block;
        }
        a:hover,
        a:focus {
          opacity: 1;
        }

        ul {
          list-style-type: none;
          padding: 0;
        }

        .footer__links {
          display: flex;
          width: 100%;
          flex-direction:column;
          justify-content: center;
          margin: 0;
          line-height: 2em;
          flex-grow:0;
          align-items: flex-end;
        }

        .footer__links li > a{
          padding: 6px 20px;
          display: block;
        }

        .footer__social {
          height: auto;
          margin: 0 auto 30px;
          color: #fff;
          background-color: ${constants.colors.darkBlue};
          padding:20px 0;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          font-size:1rem;
        }

        .footer__social .separator {
          margin: 0 20px;
        }

        .footer__social >div:last-of-type {
          display:flex;
          flex-direction:row;
          margin: 5px 0;
        }

        .footer__social img {
          width: 20px;
          padding-left: 10px;
        }
        .footer__social a:hover {
          background: none;
        }

        .partenaire a {
          opacity: 1;
          margin:0 20px;
        }
        .partenaire {
          margin: auto;
          margin 20px 0;
        }

        .partenaire img {
          width: auto;
          max-width: 152px;
          height: 82px;
          margin:3px;
        }

        .container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          flex-flow: row;
          justify-content: space-between;
        }
        .container h1:first-of-type {
          margin-top: 0;
        }

        @media only screen and (min-width: 1px) and (max-width: 800px) {
          .footer__social {
            flex-direction: column;
            padding:20px 25px;
            text-align:center;
          }
          .footer__social > div:first-of-type {
            margin-bottom:20px;
          }
          .footer__social .separator {
            display: none;
          }
          .container, .partenaire, .footer__links {
            flex-direction:column;
            align-items:center;
            justify-content:center;
            text-align:center;
          }

          .partenaire a {
            display:flex;
            flex-direction:column;
            margin: 10px auto;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
