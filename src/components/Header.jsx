import { useContext } from 'react';
import { TaskManagementTask } from '../Context/TaskContext';
import logo from '../assets/lws-logo-en.svg';

const Header = () => {

    const {user} = useContext(TaskManagementTask);
    // console.log(user)

    return (
        <div>
        <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
		<div className="container mx-auto flex items-center justify-between gap-x-6">
		
			<a href="/">
				<img 
                className="h-[45px]" 
                src={logo}
                 alt="Lws" />
			</a>
		
		</div>
        <p className='text-white text-4xl'>{user}</p>
	</nav>
  
        </div>
    );
};

export default Header;