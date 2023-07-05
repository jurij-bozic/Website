import Link from 'next/link';
import Image from 'next/image';

const Skills = () => (
	<div className="bg-[url('/assets/illustrations/details.svg')] bg-contain bg-no-repeat bg-left-top" id="about">
		<div className="container py-16 flex flex-col lg:flex-row justify-between items-center">
			<div className="flex-none lg:flex-1">
				<Image
					src="/assets/illustrations/skills.svg"
					alt="I’m Jurij, a full stack web developer!"
					width={447}
					height={326}
				/>
			</div>
			<div className="flex-none lg:flex-1 pl-0 lg:pl-8">
				<h2 className="mb-8 text-3xl font-bold text-brand-primary dark:text-white typography">More about me</h2>
				<p className="mb-[2.5rem] font-normal text-xl md:text-[26px] text-brand-secondary dark:text-slate-200 leading-[34px] typography">
					As a full stack software engineer, I develop web applications. I also have a degree in Formal Linguistics and a keen interest in scientific inquiry.

					<br /><br />

					I have 4 years of professional development experience. My main interests revolve around Front-End development in the JavaScript domain, most notably React.js, and also in the Back-end domain within PHP and Java.

					<br /><br />

					Please see my <a href="https://si.linkedin.com/in/jurij-bo%C5%BEi%C4%8D-2a6919225">LinkedIn</a> profile for details on my education and experience.
				</p>
			</div>
		</div>
	</div>
);

export default Skills;
