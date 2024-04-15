// Write your code here.
import './index.css'

const ReusableBanner = props => {
  const {bannerdetails} = props
  const {headerText, descrption, className} = bannerdetails

  return (
    <li>
      <div className={className}>
        <h1>{headerText}</h1>
        <p>{descrption}</p>
      </div>
    </li>
  )
}
export default ReusableBanner

