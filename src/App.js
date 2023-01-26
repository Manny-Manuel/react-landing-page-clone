import { css } from '@emotion/react';

/** @jsxImportSource @emotion/react */

const color = 'black';

const pageStyles = css`
  @font-face {
    font-family: 'GraphikBold.oft';

    src: url(html-css-fonts/Graphik-Font-Family);
  }
  background-color: #fff;
  margin-top: 20px;
  padding: 10px;
  color: ${color};

  .container-wide {
    background-color: white;
    padding: 10px;
  }

  .footer {
    font-family: 'GraphikBold.oft', sans-serif;
    background-color: #ffffff;
  }
  .container-navigation-option {
    color: #120036;
  }
  .branding-logoType-main-log0 {
    justify-content: flex-start;
  }
  .button-radius {
    border-radius: 20px;
    margin: 4px 2px;
    padding: 20px;
  }

  img {
    max-width: 30%;
    height: auto;
    display: block;
    margin-right: 300px;
  }
`;
const wraperStyles = css`
  max-width: 1428px;
`;

const topNavigationStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const optionMenu = css`
  list-style-type: none;
  display: flex;
  gap: 25px;
`;

function App() {
  return (
    <header css={pageStyles}>
      <div css={wraperStyles}>
        <div css={topNavigationStyles}>
          <span className="branding-logoType-main-logo">
            <svg
              width="106"
              height="28"
              viewBox="0 0 106 28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M9.1 23.308c-2.249 0-4.36-.58-6.193-1.595L.984 25.075a16.675 16.675 0 008.117 2.096c2.949 0 5.716-.763 8.116-2.096l-1.923-3.362a12.756 12.756 0 01-6.193 1.595"
                    fill="#1FB6FF"
                  ></path>
                  <path
                    d="M9.07 14.432c-2.902 0-5.132-2.381-5.132-5.296 0-2.914 2.23-5.296 5.133-5.296 2.938 0 5.097 2.382 5.097 5.296 0 2.915-2.159 5.296-5.097 5.296zM20.419 4.124V.027c-1.7 0-2.484.104-2.945.317-.462.212-.397.202-.825.52-.392.29-1.055.984-1.483 1.461C13.57.892 11.443.037 9.071.037 3.938.037.008 3.983.008 9.137c0 5.117 3.93 9.134 9.063 9.134 5.097 0 9.062-4.017 9.062-9.135 0-1.874-.526-3.587-1.439-5.01l.009-.002h3.715zM92.495 7.356c.032-.447.146-.764.341-1.221a5.12 5.12 0 01.995-1.506c.423-.448.95-.817 1.567-1.098a4.868 4.868 0 012.035-.421c.765 0 1.44.118 2.008.353a3.93 3.93 0 011.413.967c.376.41.661.9.85 1.454.165.49.269.892.308 1.472h-9.517zm13.45 1.822a12.21 12.21 0 00-.453-3.288 8.397 8.397 0 00-1.48-2.935c-.683-.868-1.564-1.58-2.62-2.116-1.06-.537-2.367-.81-3.888-.81-1.28 0-2.481.234-3.572.696a8.541 8.541 0 00-2.83 1.925 8.982 8.982 0 00-1.86 2.893c-.448 1.104-.675 2.315-.675 3.6 0 1.283.208 2.492.619 3.594a8.582 8.582 0 001.772 2.896c.765.818 1.713 1.467 2.815 1.929 1.102.46 2.345.695 3.695.695 3.258 0 5.829-1.194 7.643-3.55l.16-.207-2.816-2.161-.159.196c-.593.732-1.25 1.33-1.955 1.775-.687.434-1.51.653-2.448.653-.7 0-1.386-.114-2.04-.341a5.561 5.561 0 01-1.727-.951 4.748 4.748 0 01-1.192-1.467c-.26-.492-.408-1.173-.441-1.761h13.451V9.178zM79.43 12.942L74.804.438H70.74l6.651 17.414h4.081L88.191.438h-4.065zM41.306 14.432c-2.902 0-5.133-2.381-5.133-5.296 0-2.914 2.23-5.296 5.133-5.296 2.939 0 5.098 2.382 5.098 5.296 0 2.915-2.16 5.296-5.098 5.296m0-14.395c-5.133 0-9.062 3.946-9.062 9.1 0 5.117 3.93 9.134 9.062 9.134 5.098 0 9.063-4.017 9.063-9.135 0-5.153-3.965-9.099-9.063-9.099M61.527 14.432c-2.903 0-5.133-2.381-5.133-5.295s2.23-5.296 5.133-5.296c2.938 0 5.097 2.382 5.097 5.296s-2.16 5.295-5.097 5.295m0-14.393c-5.133 0-9.062 3.945-9.062 9.098 0 5.117 3.929 9.134 9.062 9.134 5.097 0 9.062-4.017 9.062-9.134 0-5.153-3.965-9.098-9.062-9.098M28.483.344c-.462.212-.397.202-.826.52-.262.195-.646.57-1 .94V.434h-3.74v17.418h3.74V4.467c.315-.106.991-.343 1.056-.343h3.715V.027c-1.7 0-2.484.104-2.945.317"
                    fill="#000"
                  ></path>
                </g>
              </g>
            </svg>
          </span>
          <nav className="container-navigation-option">
            <ul css={optionMenu}>
              <li>
                <a href="/">Features</a>
              </li>

              <li>
                <a href="/">About us</a>
              </li>

              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/"> Blog </a>
              </li>
            </ul>
          </nav>
          <button className="button-radius">
            <a
              className="button outline"
              id="login-Button"
              href="/"
              titel="Login"
            >
              Customer Loging
            </a>
          </button>
        </div>
        <img
          className="image-logo"
          src="/LandingCloneImages/g2-use.png"
          alt="g2 star tag"
        />
        <div className="navigation"></div>
        <div className="d-flex align-item">
          <a> loading... </a>
        </div>
      </div>
    </header>
  );
}

export default App;
