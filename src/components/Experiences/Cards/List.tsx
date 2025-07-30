
const ExperienceCardList = ({ items } : { items: string[]}) => {
    return (
        <ul className="pl-10 leading-8">
            {items.map((item, index) => (
                <li key={`item-${index}`} className="mb-2">{item}</li>
            ))}
        </ul>
    )
};

export { ExperienceCardList }