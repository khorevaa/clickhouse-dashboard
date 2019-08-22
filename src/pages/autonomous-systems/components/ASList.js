import React from 'react';
import { percentage } from "../../../utils/Number";

const handleModalView = () => {
    console.log('okey');
};

const renderItems = (items, total) => {
    const liList = items.map((item, index) => {
        return (
            <li key={index} className="list-group-item d-flex px-0">
                <div className="col-lg-6 col-md-8 col-sm-8 col-6">
                    <h6 className="go-stats__label mb-1">(№ {++index}) <a style={{cursor: 'pointer'}} onClick={handleModalView}>{ item.autonomous_system_organization }</a>
                    </h6>

                    <div className="go-stats__meta">

                        <span className="mr-2">
                              <strong>999999</strong> не уникальных IP
                        </span>

                        <span className="d-block d-sm-inline">
                              <strong className="text-success">{ item.countIP }</strong> уникальных IP
                        </span>
                    </div>
                </div>
                <div className="col-lg-6 col-md-4 col-sm-4 col-6 d-flex">
                    <div className="go-stats__value text-right ml-auto">
                        <h6 className="go-stats__label mb-1">{percentage(total, item.countIP)} % </h6>
                        <span className="go-stats__meta">Процентное соотношение</span>
                    </div>
                </div>
            </li>
        );
    });

    return liList;
};

const ASList = (props) => {
    return (
        <>
            <ul className="list-group list-group-small list-group-flush">
                { renderItems(props.data, props.count) }
            </ul>
        </>
    );
};

export default ASList;