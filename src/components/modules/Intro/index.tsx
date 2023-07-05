import Link from 'next/link';
import Image from 'next/image';
import Header from 'components/ui/theme/Header';
import programmingIcons from './programming.json';

const Intro = () => (
	<div className="bg-[url('/assets/illustrations/overlay.svg')] bg-contain bg-right-top bg-no-repeat pb-16">
		<Header />
		<div className="container py-16 flex items-center flex-col md:flex-row justify-between">
			<div className="flex-1 w-full md:w-1/2 mb-8 md:mb-0">
				<h1 className="mb-8 text-3xl md:text-5xl font-bold text-brand-primary dark:text-white typography">Hi There!</h1>
				<h2 className="mb-[2.5rem] text-2xl md:text-4xl text-brand-secondary dark:text-slate-200 typography">
					I’m Jurij, a full stack web developer!
				</h2>
				<Link href="mailto: jurij.bozic.work@gmail.com" className="button button-primary">
					Contact me
				</Link>
				<div style={{ marginTop: 45 }}>
					<div className="flex items-center">
						{programmingIcons.map(({ id, name, icon }) => (
							<div
								key={id}
								className="mr-2 last:mr-0"
							>
								<Image src={icon} alt={name} width={45} height={45} />
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="flex-1 w-full md:w-1/2">
				<Image
					src="/assets/illustrations/dev.svg"
					alt="I’m Jurij, a full stack web developer!"
					width={463}
					height={273}
					priority
				/>
			</div>
		</div>
	</div>
);

export default Intro;
