
const Card = ({course}) => {
    console.log(course.title)

    return (
     
            <li className="list-decimal px-3">{course.title}</li>
       
    );
};

export default Card;