// using propsTypes
import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
    console.log(blog);
    const { cover, title, author, hashtags, image, postDate, readingTime, } = blog;
    return (
        <div>
            <img className='w-96 h-96 p-4' src={cover} alt={`Cover picture of the title ${title}`} />
            <h2 className='text-2xl'>Title : {title}</h2>
        </div>
    );
};

// using propsTypes
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;