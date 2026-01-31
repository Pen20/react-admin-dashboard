import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import ProjectCard from "./ProjectCard";

const ProjectsGrid = () => {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

    // Using the user's provided username
	const GITHUB_USERNAME = "wastalas";

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const response = await fetch(
					`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
				);
				
				if (!response.ok) {
					throw new Error("Failed to fetch projects");
				}

				const data = await response.json();
				setProjects(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchProjects();
	}, []);

	if (loading) {
		return (
			<div className='flex justify-center items-center h-64'>
				<Loader className='animate-spin text-blue-500' size={48} />
			</div>
		);
	}

	if (error) {
		return (
			<div className='text-center text-red-500 py-10'>
				<p>Error loading projects: {error}</p>
				<p className='text-sm text-gray-400 mt-2'>
                    Please check if the GitHub username '{GITHUB_USERNAME}' is correct.
                </p>
			</div>
		);
	}

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
			{projects.map((project) => (
				<ProjectCard key={project.id} project={project} />
			))}
		</div>
	);
};
export default ProjectsGrid;
