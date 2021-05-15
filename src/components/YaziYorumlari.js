import React from 'react'
import YorumFormu from './YorumFormu'
import YorumListesi from './YorumListesi'

const YaziYorumlari = (props) => {
    
    return (
        <div>
            <YorumListesi yorumlar={props.yorumlar} />
            <YorumFormu handleSubmit={props.handleSubmit} />
        </div>
    )
}

export default YaziYorumlari
