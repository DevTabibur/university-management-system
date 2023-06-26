// auto generated user id

import { User } from './users.model'

export const findLastUserId = async () => {
  const lastUser = await User.find({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()
  return lastUser?.id
}

export const generatedUserId = async () => {
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0') // 0000
  // console.log('currentId', currentId)

  // increment by 1
  const incrementedId = parseInt(currentId + 1)
    .toString()
    .padStart(5, '0')
  return incrementedId
}
