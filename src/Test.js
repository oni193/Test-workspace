import React , { useState }from 'react';


const Partner = () => {

    const partnerStyle = {
        height: '900px',
        textAlign: 'center',
        paddingTop: '200px'
    };
    const tabStyle = {
        width: '100px',
        height: '30px',
        marginRight: '10px'
    }

    const content = [
        {
            tab: '고객사',
            content: '고객1'
        },
        {
            tab: '협력사',
            content: '협력1'
        },
        {
            tab: '계열사',
            content: '계열1'
        }  
    ];

    const useTabs =(initialTabs, allTabs) => {
        const [contentIndex, setContentIndex] = useState(initialTabs);
        return {
            contentItem: allTabs[contentIndex], 
            contentChange: setContentIndex
        };
    };
    


    const { contentItem, contentChange } = useTabs(0, content);
        return(
        <div>
            <div style={partnerStyle} >
                {content.map((section, index)=>(
                    <button onClick={() => contentChange(index)} style={tabStyle}>{section.tab }</button>
                    ))}
                <br/>
                <br/>
                {contentItem.content} 
            </div>
        </div>
    );
};
export default Partner;