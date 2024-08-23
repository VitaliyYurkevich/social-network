import React from 'react'


import Contact from './Contact'

import s from '../../style.module.css'
import {UserProfilePropsType} from "../../../../../redux/profile-reducer";


export type ContactsType = {
    github?: string
    vk?: string
    facebook?: string
    instagram?: string
    twitter?: string
    website?: null | string
    youtube?: null | string
    mainLink?: null | string
}

type ProfileDescriptionType = {
  info: UserProfilePropsType
}

const ProfileDescription: React.FC<ProfileDescriptionType> = ({ info }) => (
  <div className={s.description}>
    <div className={s.aboutMe}>
      <p>About me</p>
      <span>{info.aboutMe}</span>
    </div>

    {info.lookingForAJob && (
      <div className={s.skills}>
        <p>Skills</p>
        <span>{info.lookingForAJobDescription}</span>
      </div>
    )}

    <p>My contacts</p>
    <div className={s.contactsList}>
      {info.contacts &&
        Object.keys(info.contacts).map((key) => (
          <Contact key={key} contactTitle={key} contactValue={info.contacts[key as keyof ContactsType] || ''} />
        ))}
    </div>
  </div>
)

export default ProfileDescription
