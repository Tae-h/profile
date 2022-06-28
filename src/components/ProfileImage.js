import {memo, useState} from "react";
import {Image} from "antd";
import profileImage from '../assets/images/my_profile.jpg';


const ProfileImage = memo(() => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Image
                preview={{ visible: false }}
                width={200}
                src={profileImage}
                alt="profile"
                onClick={() => setVisible(true)}
            />
            <div style={{ display: 'none' }}>
                <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                    <Image src={profileImage} width={200} alt={"profile Image"}/>
                </Image.PreviewGroup>
            </div>
        </>
    )
});

ProfileImage.displayName = 'ProfileImage';

export default ProfileImage;
