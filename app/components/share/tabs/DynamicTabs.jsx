import { Icon } from '@iconify/react'
import { Fragment } from 'react'

function DynamicTabs({ tabsArr }) {
  return (
    <div className="tabs tabs-lift justify-center">
      {tabsArr.map((item, index) => (
        <Fragment key={index}>
          <label className="tab capitalize text-[14px] gap-3 border-none">
            <input type="radio" name="my_tabs_4" defaultChecked={index === 0} />
            {item.iconName && <Icon icon={item.iconName} className="text-2xl" />}
            <span className="tab-title">{item.title}</span>
          </label>
          <div className="tab-content bg-base-300 p-6 rounded-3xl mt-5">{item.content}</div>
        </Fragment>
      ))}
    </div>
  );
}
export default DynamicTabs
