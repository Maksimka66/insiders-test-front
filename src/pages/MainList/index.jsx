import { useSelector } from 'react-redux';

import { selectUsers } from '../../store/users/usersSlice';

const MainList = () => {
    const tasks = useSelector(selectUsers);

    const renderList = (status) =>
        tasks
            .filter((item) => item.status === status)
            .map((item) => (
                <li key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>{item.status}</p>
                    <p>{item.priority}</p>
                </li>
            ));

    return (
        <div>
            <ul>{renderList('todo')}</ul>
            <ul>{renderList('inProgress')}</ul>
            <ul>{renderList('done')}</ul>
        </div>
    );
};

export default MainList;
