type ProjectCardProps = {
    productive: boolean;
    title: string;
    description: string;
    link?: string;
    altImg: string;
    image: string;
}

const ProductiveBadge = () =>
    <span className="font-semibold bg-green-100 text-green-800 text-xs mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">PRODUCTIVE</span>

const ProjectCard = ({ productive, description, image, title, link = "#", altImg }: ProjectCardProps) => {
    const imageUrl = `/projects/${image}.webp`;

    return <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
        <a href={link} rel="noopener noreferrer" target="_blank">
            <img className="rounded-t-lg" src={imageUrl} alt={altImg} width={382} height={192} />
        </a>
        <div className="p-5 flex flex-col flex-1">
            <a href={link} rel="noopener noreferrer" target="_blank">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </a>
            <div className="mb-2">
                {productive ? <ProductiveBadge /> : null}
            </div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            <a href={link} rel="noopener noreferrer" target="_blank" className="inline-flex mt-auto self-start items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Go to project
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
        </div>
    </div>
}

export default ProjectCard;