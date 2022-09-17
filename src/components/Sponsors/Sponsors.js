import React from 'react';
import Sponsor from './Sponsor';
import './Sponsors.css';
import Slideshow from './Slideshow';

function Sponsors() {
  return (
    <div id="sponsors" className="main bgs">
      <h1> This is the sponsors section</h1>
      <div className="tier1">
        <Slideshow
          slides={[
            <Sponsor
              title={sponsorData.tier1.shell.title}
              description={sponsorData.tier1.shell.description}
              src={sponsorData.tier1.shell.src}
              link={sponsorData.tier1.shell.link}
              height={300}
            />,
            <Sponsor
              title={sponsorData.tier1.uottawa.title}
              description={sponsorData.tier1.uottawa.description}
              src={sponsorData.tier1.uottawa.src}
              link={sponsorData.tier1.uottawa.link}
              height={250}
            />,
            <Sponsor
              title={sponsorData.tier1.ceed.title}
              description={sponsorData.tier1.ceed.description}
              src={sponsorData.tier1.ceed.src}
              link={sponsorData.tier1.ceed.link}
              width={300}
            />
          ]}
        />
      </div>
      <div className="tier2"></div>
      <div className="tier3"></div>
    </div>
  );
}

const sponsorData = {
  tier1: {
    shell: {
      title: 'Shell',
      src: '/sponsors/shell.png',
      description:
        'Shell is a willing and able player in the transition from a high carbon system to a more sutainable, lower carbon one. We are investing in renewable energy like solar, wind and advanced biofuels made from waste.  We are also exploring new ways of storing renewable energy and developing digital products and services to help consumers and businesses use energy more efficiently. And we continue to supply the world with natural gas - the cleanest burning hydrocarbon - to heat and light homes and to power industry.',
      link: 'https://www.makethefuture.shell/en-gb/shell-eco-marathon'
    },
    uottawa: {
      title: 'uOttawa',
      src: '/sponsors/uottawa.png',
      description:
        'The Faculty of Engineering at the University of Ottawa is a leader in engineering and computer science education and research, providing its students with top quality degrees and experiential learning experiences to prepare them to meet the ever-changing needs of society.',
      link: 'https://engineering.uottawa.ca/'
    },
    ceed: {
      title: 'CEED',
      src: '/sponsors/ceed.png',
      description:
        'CEED is a student and recent alumni run centre that provides engineering design and entrepreneurship opportunities and education to students at the Faculty of Engineering at the University of Ottawa.',
      link: 'https://www2.uottawa.ca/faculty-engineering/centre-entrepreneurship-engineering-design'
    }
  }
};

export default Sponsors;
