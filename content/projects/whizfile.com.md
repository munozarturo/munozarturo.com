---
title: "whzifile.com"
subtitle: "a fully fledged file transfer service built in Next.js with AWS S3 and MongoDB in the back-end."
date: "11:03 aug. 23rd 2021"
tags: ["typescript", "mongodb", "aws-s3"]
links: [
    {
        "icon": "globe",
        "href": "https://www.whizfile.com/send",
    },
    {
        "icon": "github",
        "href": "https://github.com/munozarturo/whizfile.com",
    },
]
---

Whizfile.com is a file transfer service that offers a user-friendly platform for sending files. The website allows users to easily add files for transfer by either clicking or using a drag-and-drop interface. Users can include a title and a message with their file transfer, indicating a focus on simplicity and convenience in file sharing.

![whizfile-banner](/images/whizfile-banner.png)

```typescript
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTryAgain(false);

    const { data: newData } = await refetch();

    const { urlPrefix, urlTransferId } = parseTransferUrl(transferId);

    if (newData) {
        router.push(`/receive/${urlTransferId}`);
    }
};

const parseTransferUrl = (url: string) => {
    const transferIdRegex = /^[a-zA-Z0-9]{0,6}$/;
    const fullUrlPattern =
        /^(https?:\/\/)?whizfile\.com\/receive\/([a-zA-Z0-9]{0,6})$/;

    let urlPrefix = url;
    let urlTransferId = "";

    if (url.match(transferIdRegex)) {
        urlPrefix = "";
        urlTransferId = url;
    } else if (url.startsWith(`${BASE_URL}/receive/`)) {
        urlPrefix = `${BASE_URL}/receive/`;
        urlTransferId = url.replace(`${BASE_URL}/receive/`, "");
    } else if (url.startsWith(`${BASE_URL_NO_HTTP}/receive/`)) {
        urlPrefix = `${BASE_URL_NO_HTTP}/receive/`;
        urlTransferId = url.replace(`${BASE_URL_NO_HTTP}/receive/`, "");
    }

    return {
        urlPrefix: urlPrefix,
        urlTransferId: urlTransferId,
    };
};
```

Whizfile.com is a file transfer service that offers a user-friendly platform for sending files. The website allows users to easily add files for transfer by either clicking or using a drag-and-drop interface. Users can include a title and a message with their file transfer, indicating a focus on simplicity and convenience in file sharing.
