import React from 'react'

const ProfileInfo = ({educations, phones, address, work_experiences}) => {

    return (
        <div className="form-group p-3 shadow mt-3 h-100">
            <p style={{color: '#000D83', fontWeight: '500'}}>Անձնական էջ</p>
            {
                educations.length
                    ? <div>
                        {educations.map(education => (
                            <p key={education.id}>{education.start_date}-{education.end_date}, {education.university}, {education.education}</p>
                        ))}
                    </div>
                    : null
            }
            {
                work_experiences.length
                    ? <div>
                        <p style={{color: '#000D83', fontWeight: '500'}}>Աշխատանքային փորձ</p>
                        {work_experiences.map(work => (
                            <p key={work.id}>{work.start_date}-{work.end_date}, {work.company}, {work.profession}</p>
                        ))}
                    </div>
                    : null
            }
            {
                address.length
                    ? <div>
                        <p style={{color: '#000D83', fontWeight: '500'}}>Հասցե</p>
                        {address.map(a => (
                            <p key={a.id}>{a.address}</p>
                        ))}
                    </div>
                    : null
            }
            {
                phones.length
                    ? <div>
                        <p style={{color: '#000D83', fontWeight: '500'}}>Հեռախոսահամար</p>
                        {phones.map(phone => (
                            <p key={phone.id}>{phone.phone}</p>
                        ))}
                    </div>
                    : null
            }
        </div>
    )
}

export default ProfileInfo