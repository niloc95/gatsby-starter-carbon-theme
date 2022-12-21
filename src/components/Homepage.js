import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';
import Texture from './texture.jpg';
import Carbon from './carbon.jpg';

const FirstLeftText = () => <p>The Service</p>;

const FirstRightText = () => (
  <p>
    At Frontend, we believe that progress starts with customer-centric and design-centric thinking. We aim to help you with strategy and execution so that your vision comes to life through development and design.
   
    
    {/* . You can also provide <code>color</code> and <code>backgroundColor</code>{' '}
    props to suit your theme.
    <a
      className={calloutLink}
      href="https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/gatsby-theme-carbon/templates/Homepage.js">
      Homepage source →
    </a> */}
  </p>
);

const SecondLeftText = () => <p>Callout component</p>;

const SecondRightText = () => (
  <p>
    You can also not use these components at all by not providing the callout
    props to the template or writing your own template.
    <a
      className={calloutLink}
      href="https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/gatsby-theme-carbon/templates/Homepage.js">
      Homepage source →
    </a>
  </p>
);

const BannerText = () => <h1><strong>Frontend</strong> System Solutions</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Texture} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
