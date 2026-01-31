import Header from "../components/common/Header";
import ProjectsGrid from "../components/projects/ProjectsGrid";

const ProjectsPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Projects' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				<ProjectsGrid />
			</main>
		</div>
	);
};
export default ProjectsPage;
