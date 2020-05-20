import React, { Component } from 'react';
import { Card } from 'antd';
import { LinkedinOutlined, GithubOutlined} from '@ant-design/icons';

const { Meta } = Card;
class Profile extends Component {

render() {
return(
<Card
style={{ width: 300 }}
cover={
<img
alt="example"
src = "https://media-exp1.licdn.com/dms/image/C4E03AQFDQr2gvxzNJg/profile-displayphoto-shrink_200_200/0?e=1595462400&v=beta&t=3chqpfTKNqdto8ixTL2QlIiZmtWc0buLN--hZ8tZOKg"
/>
}
actions={[ <a href="https://www.linkedin.com/in/ikechi-ekwueme-1248271a2/"><LinkedinOutlined key = "linkedin" /></a>
,<a href="https://github.com/ikeekwu"> <GithubOutlined key = "github" /></a>
      
]}
>
<Meta
title="Ike Ekwueme"
description="Fullstack developer looking for long term learning in the industry."
/>
</Card>  

)
}
}

export default Profile;