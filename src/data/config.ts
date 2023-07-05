const config = {
	defaultTitle: 'Jurij Božič',
	url:
		process.env.NODE_ENV !== 'development'
			? (process.env.NEXT_PUBLIC_PORTFOLIO_URL as string)
			: 'http://localhost:3040',
	defaultDescription: 'I’m Jurij, a full stack web developer!',
	googleAnalyticsID: '',
	NEXT_PUBLIC_PORTFOLIO_URL: process.env.NEXT_PUBLIC_PORTFOLIO_URL as string,
	twitter: '',
};

export default config;
