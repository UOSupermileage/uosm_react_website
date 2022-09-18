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
              height={250}
              tier="tier1"
            />,
            <Sponsor
              title={sponsorData.tier1.uottawa.title}
              description={sponsorData.tier1.uottawa.description}
              src={sponsorData.tier1.uottawa.src}
              link={sponsorData.tier1.uottawa.link}
              height={250}
              tier="tier1"
            />,
            <Sponsor
              title={sponsorData.tier1.ceed.title}
              description={sponsorData.tier1.ceed.description}
              src={sponsorData.tier1.ceed.src}
              link={sponsorData.tier1.ceed.link}
              width={300}
              tier="tier1"
            />
          ]}
        />
      </div>
      <div className="tier2">
        <Sponsor
          src={sponsorData.tier2.dica.src}
          link={sponsorData.tier2.dica.link}
        />
        <Sponsor
          src={sponsorData.tier2.dena.src}
          link={sponsorData.tier2.dena.link}
        />
        <Sponsor
          src={sponsorData.tier2.solidworks.src}
          link={sponsorData.tier2.solidworks.link}
        />
        <Sponsor
          src={sponsorData.tier2.altium.src}
          link={sponsorData.tier2.altium.link}
        />
      </div>
    </div>
  );
}

const sponsorData = {
  tier1: {
    shell: {
      title: 'Shell',
      src: '/sponsors/shell.png',
      description:
        'Shell is a willing and able player in the transition from a high carbon system to a more sutainable, lower carbon one. We are investing in renewable energy like solar, wind and advanced biofuels made from waste.  We are also exploring new ways of storing renewable energy and developing digital products and services to help consumers and businesses use energy more efficiently.',
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
  },
  tier2: {
    dica: {
      src: '/sponsors/dica.png',
      link: 'https://dica.ca/'
    },
    dena: {
      src: '/sponsors/dena.png',
      link: 'https://denatechnologies.com/'
    },
    solidworks: {
      src: '/sponsors/solidworks.png',
      link: 'https://www.solidworks.com/'
    },
    altium: {
      src: '/sponsors/altium.png',
      link: 'https://www.altium.com/altium-designer/'
    }
  }
};

export default Sponsors;
