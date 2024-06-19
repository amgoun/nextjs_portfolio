import { FaGithub, FaYoutube, FaStackOverflow } from 'react-icons/fa'
import Link from 'next/link'

const socialLinks = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/amgoun'
  },
  {
    icon: <FaYoutube />,
    path: 'https://www.youtube.com/channel/UCbsnQ_ADchMvoOYgbrPsfFw'
  },
  {
    icon: <FaStackOverflow />,
    path: 'https://stackoverflow.com/users/8044017/amgoun'
  }
]
const Social = () => {
  return (
    <div className='flex gap-6'>
      {socialLinks.map((item, index) => (
        <Link
          target='_blank'
          href={item.path}
          key={index}
          className='duration-3000 flex size-10 items-center justify-center rounded-full border-2 border-blue text-blue hover:bg-blue/20 hover:transition-all'
        >
          {item.icon}
        </Link>
      ))}
    </div>
  )
}

export default Social
