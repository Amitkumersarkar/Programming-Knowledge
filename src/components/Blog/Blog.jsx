// using propsTypes
import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
    console.log(blog);
    return (
        <div>

        </div>
    );
};

// using propsTypes
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;