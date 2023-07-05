import getRepos from 'lib/getRepos';
import Repository from 'components/ui/Repository';

const Projects = async () => {
	const data = [
		{
			id: 1,
			name: 'crypto-platform',
			description: 'A crypto platform app, with API calls and Firebase auth.',
			stargazers: 0,
			forkCount: 0,
			languages: ['ReactJS, NextJS, Firebase'],
			url: 'https://github.com/jurij-bozic/crypto-platform'
		},
		{
			id: 2,
			name: 'astronomy-chat',
			description: 'Chat app for astronomers, build with ReactJS, NodeJS and GetStream db-service.',
			stargazers: 0,
			forkCount: 0,
			languages: ['ReactJS, NodeJS'],
			url: 'https://github.com/jurij-bozic/astronomy-chat'
		},
		{
			id: 3,
			name: 'react-form',
			description: 'Simple ReactJS form for authenticating users with Firebase.',
			stargazers: 0,
			forkCount: 0,
			languages: ['ReactJS, Firebase'],
			url: 'https://github.com/jurij-bozic/react-form'
		},
		{
			id: 4,
			name: 'weather-app',
			description: '(old project) Application for showing the weather forecast for a given location.',
			stargazers: 0,
			forkCount: 0,
			languages: ['Vanilla JS'],
			url: 'https://github.com/jurij-bozic/weather-app'
		},

	];

	return (
		<div className="container py-8" id="projects">
			<h2 className="text-2xl font-bold mb-6">Projects</h2>
			<div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-1 md:col-span-2 lg:col-span-3">
				{data &&
					data.map((node) => {
						if (!node) return null;
						return <Repository key={node.id} {...node} />;
					})}
			</div>
		</div>
	);
};

export default Projects;
