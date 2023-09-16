

const Card = ({course}) => {
    console.log(course.title)

    return (
        <div>
            <h1>{course.title}</h1>
        </div>
    );
};

export default Card;