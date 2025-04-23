import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between mx-4 p-9 border-b-1'>
            <h3 className='text-3xl font-bold'>Programming Knowledge</h3>
            {/* <div >
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div> */}
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;