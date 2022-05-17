import {memo, useState} from "react";
import {Image} from "antd";
import profileImage from '../assets/images/my_profile.jpg';


const ProfileImage = memo(() => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Image
                preview={{ visible: false }}
                width={160}
                src={profileImage}
                style={{borderRadius: '50%'}}
                onClick={() => setVisible(true)}
            />
            <div style={{ display: 'none' }}>
                <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                    <Image src={profileImage} width={200}/>
                    <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" width={200}/>
                    <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" width={200}/>
                </Image.PreviewGroup>
            </div>
        </>
    )
});

export default ProfileImage;