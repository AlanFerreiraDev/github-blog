import moment from 'moment'

export const relativeDataFormatter = (date: string) => {
  return moment(date).fromNow()
}
