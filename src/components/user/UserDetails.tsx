import { useParams } from 'react-router-dom';
import '../common/styles/detailsPageLayout.css';
import './UserDetails.css';
import { useFetch } from '../../utils/hooks/useFetch';
import { User } from '../../models/user';
import ErrorMessage from '../common/errorMessage/ErrorMessage';
import LoadingSpinner from '../common/loadingSpinner/LoadingSpinner';
import { FaUser } from 'react-icons/fa6';
import NoDataMessage from '../common/noDataMessage/NoDataMessage';
import { useMemo } from 'react';

const UserDetails = () => {
  const { id: userId } = useParams<{ id: string }>();
  const {
    data: user,
    error,
    loading,
  } = useFetch<User>(`${process.env.REACT_APP_USERS_API_URL!}/${userId}`);

  const UserIcon = FaUser as any;

  if (error) {
    return (
      <div className="details-page-container">
        <ErrorMessage />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="details-page-container">
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <div className="details-page-container">
      {!user ? (
        <NoDataMessage
          Icon={UserIcon}
          message="No details for this recipe available"
        />
      ) : (
        <div className="details-page-content">
          <div className="details-page-header">
            <img />
            <div>
              {user.firstName} {user.lastName}
            </div>
          </div>
          <div className="details-page-body">
            <fieldset className="details-page-info-content">
              <legend className="border-text">Personal Info</legend>
              <div className="details-page-info-tile">
                <span className="details-page-info-tile-title">Age:</span>{' '}
                {user.age}
              </div>
              <div className="details-page-info-tile">
                <span className="details-page-info-tile-title">Gender:</span>{' '}
                {user.gender}
              </div>
              <div className="details-page-info-tile birth-col">
                <span className="details-page-info-tile-title">
                  Birth Date:
                </span>{' '}
                {user.birthDate}
              </div>
            </fieldset>
            <fieldset className="details-page-info-content">
              <legend className="border-text">Contact Info</legend>
              <div className="details-page-info-tile">
                <span className="details-page-info-tile-title">Username:</span>{' '}
                {user.username}
              </div>
              <div className="details-page-info-tile">
                <span className="details-page-info-tile-title">Phone:</span>{' '}
                {user.phone}
              </div>
              <div className="details-page-info-tile email-col">
                <span className="details-page-info-tile-title">Email:</span>{' '}
                {user.email}
              </div>
            </fieldset>
            <fieldset className="details-page-info-content">
              <legend className="border-text">Address</legend>
              <div className="details-page-info-tile">
                <span className="details-page-info-tile-title">Street:</span>{' '}
                {user.address.address}
              </div>
              <div className="details-page-info-tile">
                <span className="details-page-info-tile-title">City:</span>{' '}
                {user.address.city}
              </div>
              <div className="details-page-info-tile">
                <span className="details-page-info-tile-title">State:</span>{' '}
                {user.address.state}
              </div>
              <div className="details-page-info-tile">
                <span className="details-page-info-tile-title">
                  State Code:
                </span>{' '}
                {user.address.stateCode}
              </div>
              <div className="details-page-info-tile">
                <span className="details-page-info-tile-title">
                  Postal Code:
                </span>{' '}
                {user.address.postalCode}
              </div>
              <div className="details-page-info-tile">
                <span className="details-page-info-tile-title">Country:</span>{' '}
                {user.address.country}
              </div>
            </fieldset>
            <fieldset className="details-page-info-content">
              <legend className="border-text">Company</legend>
              <div className="details-page-info-tile">
                <span className="details-page-info-tile-title">
                  Department:
                </span>{' '}
                {user.company.department}
              </div>
              <div className="details-page-info-tile">
                <span className="details-page-info-tile-title">Name:</span>{' '}
                {user.company.name}
              </div>
              <div className="details-page-info-tile">
                <span className="details-page-info-tile-title">Title:</span>{' '}
                {user.company.title}
              </div>
              <div className="details-page-info-tile">
                <span className="details-page-info-tile-title">
                  University:
                </span>{' '}
                {user.university}
              </div>
            </fieldset>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
