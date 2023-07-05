import Image from 'next/image';
import ContactForm from './ContactForm';
import Link from 'next/link';

const Contact = () => (
	<div className="container py-16 flex items-start justify-between flex-col lg:flex-row" id="contact">
		<div className="flex-none w-full lg:w-auto lg:flex-1 pr-0 lg:pr-8 order-2 lg:order-1">
			{/* <ContactForm /> */}
			<h2
				className='mb-[2.5rem] font-normal text-xl md:text-[26px] text-brand-secondary dark:text-slate-200 leading-[34px] typography'
				style={{ marginBottom: 60 }}>
				You can contact me on this e-mail address:
			</h2>
			<Link href="mailto: jurij.bozic.work@gmail.com" className="button button-primary">
				Contact me
			</Link>
		</div>
		<div className="flex-none w-full lg:w-auto lg:flex-1 order-1 lg:order-2 mb-8 lg:mb-0">
			<Image
				src="/assets/illustrations/contact.svg"
				alt="I’m Jurij, a full stack web developer!"
				width={498}
				height={313}
			/>
		</div>
	</div>
);

export default Contact;
