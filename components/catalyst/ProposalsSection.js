import Link from "next/link";
import React, { useState } from "react";
import Proposal from "./Proposal";

export default function ProposalsSection() {

  return (
    <div className="mx-auto py-7 spacing-x border-y-4 border-black">
      <h1 className="text-6xl text-center py-4">Proposals from Gimbalabs</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 px-8 md:px-0'>
				<Proposal
					icon='/catalyst/Developer-ecosystem.png'
					alt='A digital ecosystem'
					category='Developer Ecosystem - The Evolution'
					description='What research, tools or software can improve the developer ecosystem or infrastructure to make it easier to build and scale on the Cardano blockchain?'
					proposal='Project-Based Documentation for the Open-Source Andamio Platform'
					link='https://cardano.ideascale.com/c/idea/103185'
				/>
				<Proposal
					icon='/catalyst/products-integrations.png'
					alt="An ultra-realistic photograph of the subject's face, with a strong emphasis on their single eye enhanced by the 300mm lens at f2.8"
					category='Products & Integrations'
					description='What products and integrations can be developed or improved that will offer more use cases to the Cardano ecosystem that are high impact and drive more adoption?'
					proposal='Andamio by Gimbalabs: Open-source education and collaboration system.'
					link='https://cardano.ideascale.com/c/idea/103484'
				/>
				<Proposal
					icon='/catalyst/decentralized.png'
					alt='Decentralized world'
					category='DAOs <3 Cardano'
					description="How can we make Cardano the go-to choice for building DAOs? What tools can we provide to enable effective DAO's Creation & Operation"
					proposal='DAOs <3 Andamio. Skill-acquisition and contribution tracking.'
					link='https://cardano.ideascale.com/c/idea/104780'
				/>
				<Proposal
					icon='/catalyst/Open-source.png'
					alt='Two hands holding a lightbulb'
					category='OSDE: Open Source Dev Ecosystem'
					description='Can we build a community-owned Open-Source Ecosystem that’s commercially viable to drive growth, increase opportunities, and increase project visibility for the whole Cardano Community?'
					proposal='Andamio platform: Open Source Educational Revolution'
					link='https://cardano.ideascale.com/c/idea/103298'
				/>
				<Proposal
					icon='/catalyst/translation.png'
					alt='Typwriter is encircled by multiple pairs of hands, the hands are multi racial, multicultural'
					category='Developer Ecosystem - The Evolution'
					description='What research, tools or software can improve the developer ecosystem or infrastructure to make it easier to build and scale on the Cardano blockchain?'
					proposal='Translation and implementation of the Gimbalabs’ Plutus PBL'
					link='https://cardano.ideascale.com/c/idea/105679'
				/>
				<Proposal
					icon='/catalyst/tech-stack.png'
					alt='a diagram for a master degree in ai and nlp'
					category='Catalyst Systems improvements'
					description="What research and development is required to advance the state of the art of Catalyst and allow Catalyst to serve the community's needs better?"
					proposal='Catalyst PBL: Onboarding for Catalyst’s Voting and Governance Tech Stack'
					link='https://cardano.ideascale.com/c/idea/106731'
				/>
				<Proposal
					icon='/catalyst/catalyst.png'
					alt='chemical reactions in the brain cause human consciousness'
					category='Catalyst Systems improvements'
					description="What research and development is required to advance the state of the art of Catalyst and allow Catalyst to serve the community's needs better?"
					proposal='Catalyst Learning management system for skill-acquisition and contribution tracking'
					link='https://cardano.ideascale.com/c/idea/106355'
				/>
				<Proposal
					icon='/catalyst/onboarding.png'
					alt='An entrepreneur leading a group of new team members through a guided tour'
					category='SPO Tools & Community Projects'
					description='How can we support effective and impactful projects and initiatives to build and support the SPO Ecosystem and Community?'
					proposal='Easy onboarding of ADA holders to Stake Pool Operators'
					link='https://cardano.ideascale.com/c/idea/104999'
				/>
			</div>
    </div>
  );
}
