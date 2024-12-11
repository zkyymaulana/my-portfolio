import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { RiWhatsappFill } from 'react-icons/ri';

const socials = [
	{
		icon: <RiInstagramFill />,
		path: '',
	},
	{
		icon: <RiWhatsappFill />,
		path: '',
	},
	{
		icon: <FaGithub />,
		path: '',
	},
	{
		icon: <FaLinkedin />,
		path: '',
	},
];

function Socials({ containerStyles, iconStyles }) {
	return (
		<div className={containerStyles}>
			{socials.map((item, index) => {
				return (
					<Link href={item.path} key={index} className={iconStyles}>
						<span>{item.icon}</span>
					</Link>
				);
			})}
		</div>
	);
}

export default Socials;
