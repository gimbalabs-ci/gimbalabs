import Image from 'next/image';
import Link from 'next/link';

export default function Proposal({
	icon,
	alt,
	category,
	description,
	proposal,
	link,
	target,
}) {
	return (
		<div className='bg-white rounded-lg shadow-md p-6 grid grid-cols-1 gap-y-4'>
			<div className='flex justify-center'>
				<Image
					src={icon}
					alt={alt}
					width={200}
					height={200}
					priority
					className='rounded-md object-contain'
				/>
			</div>
			<div className='text-start'>
				<h2 className='text-slate-900 text-xl xl:text-2xl font-bold mb-4'>
					{proposal}
				</h2>
				<p className='text-slate-900 text-justify xl:text-lg mb-4'>
					{description}
				</p>
				<h3 className='text-red-500 text-lg xl:text-xl font-medium mb-4'>
					{category}
				</h3>
			</div>
			<div className='flex flex-col justify-end'>
				<p className='2xl:text-2xl text-slate-900'>
					Click{' '}
					<span className='text-red-500 font-bold'>
						<Link
							className='hover:-translate-y-1
                hover:scale-110
                motion-reduce:transition-none motion-reduce:hover:transform-none'
							href={link}
							target='_blank'>
							here
						</Link>
					</span>{' '}
					to see our {category} proposal.
				</p>
			</div>
		</div>
	);
}
