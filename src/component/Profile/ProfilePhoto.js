import React from 'react';
import Photo from '../image/photo.jpeg';

const ProfilePhoto = () => {
	return (
		<div>
			<img src={Photo} alt="" className="img" />
		</div>
	);
};

export default ProfilePhoto;
