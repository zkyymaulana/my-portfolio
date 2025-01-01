import Image from 'next/image';
import React from 'react';

const services = [
	{
		icon: 'assets/services/icon-1.svg',
		title: 'UI UX Design',
		description: 'Designing compelling engaging user experiece.',
	},
	{
		icon: 'assets/services/icon-1.svg',
		title: 'Web Development',
		description: 'Developing robust, scalabel websites for all devices.',
	},
	{
		icon: 'assets/services/icon-1.svg',
		title: 'Wordpress Developer',
		description: 'Designing compelling engaging user experiece.',
	},
	{
		icon: 'assets/services/icon-1.svg',
		title: 'Care & Support',
		description: 'Providing updates, security, and support for performance.',
	},
];

const Services = () => {
	return (
		<section className="relative z-40" id="services">
			<div className="container mx-auto">
				<ul className="reltive grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] -top-12 place-items-center lg:place-items-stretch">
					{services.map((service, index) => {
						return (
							<li key={index} className="bg-white shadow-custom p-6 max-w-[350px] md:max-w-none rounded-lg">
								<Image src={service.icon} width={48} height={48} alt="" className="mb-4" />
								<h3 className="text-[20px] text-primary font-semibold mb-3">{service.title}</h3>
								<p className="text-[15px]">{service.description}</p>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default Services;
