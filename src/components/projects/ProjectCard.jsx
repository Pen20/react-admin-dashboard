import { motion } from "framer-motion";
import { GitBranch, Star, BookOpen } from "lucide-react";

const ProjectCard = ({ project }) => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700'
			whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
		>
			<div className='p-6'>
				<div className='flex items-center justify-between mb-4'>
					<div className='flex items-center text-sm text-gray-400'>
						<BookOpen size={16} className='mr-2' />
						<span className='truncate max-w-[150px]'>{project.owner.login}</span>
					</div>
					{project.language && (
						<span className='px-2 py-1 bg-blue-500 bg-opacity-20 text-blue-400 text-xs rounded-full'>
							{project.language}
						</span>
					)}
				</div>

				<a 
					href={project.html_url} 
					target="_blank" 
					rel="noopener noreferrer"
					className='block mt-2'
				>
					<h3 className='text-xl font-semibold text-gray-100 mb-2 hover:text-blue-400 transition-colors'>
						{project.name}
					</h3>
				</a>
				
				<p className='text-gray-400 text-sm mb-4 line-clamp-3 h-15'>
					{project.description || "No description available"}
				</p>

				<div className='flex items-center justify-between text-gray-400 text-sm'>
					<div className='flex items-center space-x-4'>
						<div className='flex items-center'>
							<Star size={16} className='mr-1 text-yellow-500' />
							<span>{project.stargazers_count}</span>
						</div>
						<div className='flex items-center'>
							<GitBranch size={16} className='mr-1 text-green-400' />
							<span>{project.forks_count}</span>
						</div>
					</div>
					<div className='text-xs text-gray-500'>
						Updated {new Date(project.updated_at).toLocaleDateString()}
					</div>
				</div>
			</div>
		</motion.div>
	);
};
export default ProjectCard;
