module.exports = {
    base: '/UCT-CS/',
    title: 'UCT CS',
    description: 'UCT Computer Science',
    themeConfig: {
        // Assumes GitHub. Can also be a full GitLab url.
        repo: 'olivermharrison/UCT-CS',
        // Customising the header label
        // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
        repoLabel: 'Contribute!',
        sidebarDepth: 2,
        sidebar: [
            {
                title: 'CSC1005F',
                collapsable: true,
                children: [
                    ['/CSC1005F/', 'Introduction'],
                    '/CSC1005F/fundamentals',
                    '/CSC1005F/programming',
                    '/CSC1005F/testing',
                    '/CSC1005F/big-o',
                    '/CSC1005F/searching',
                    '/CSC1005F/sorting',
                    '/CSC1005F/numbers',
                ]
            },
            {
                title: 'CSC1006S',
                collapsable: true,
                children: [
                    ['/CSC1006S/', 'Introduction'],
                ]
            },
            {
                title: 'CSC2001F',
                collapsable: true,
                children: [
                  ['/CSC2001F/', 'Introduction'],
                ]
            },
            {
                title: 'CSC2002S',
                collapsable: true,
                children: [
                  ['/CSC2002S/', 'Introduction'],
                ]
            },
            {
                title: 'CSC3002F',
                collapsable: true,
                children: [
                  ['/CSC3002F/', 'Introduction'],
                ]
            },
            {
                title: 'CSC3003S',
                collapsable: true,
                children: [
                  ['/CSC3003S/', 'Introduction'],
                ]
            },
        ],
    }
}