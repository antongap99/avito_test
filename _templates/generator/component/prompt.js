// eslint-disable-next-line no-undef
module.exports = {
	prompt: ({ inquirer }) => {

		const questions = [
			{
				type: 'input',
				name: 'componentName',
				message: 'component name',
			},
			{
				type: 'input',
				name: 'typeComp',
				message: 'What is your module? (assets, components, router, views)'
			},
			{
				type: 'input',
				name: 'dir',
				message: 'Where is the directory?(Optional)'
			}
		];

		return inquirer
			.prompt(questions)
			.then((answers) => {
			const { componentName, dir, typeComp } = answers;
			const path = `${dir ? `${dir}/` : ''}${componentName}`;
			const absPath = `./src/${typeComp}/${path}`;

			return {
					...answers,
					path,
					absPath
				};
		});
	}
}