# Google ping action

## Using the action

In your workflow definition file, add the following step. This should be after you've deployed your site.

```yaml
# .github/workflows/workflow.yml
jobs:
    deployment_job:
        ...
        steps:
            ...
            - uses: dlehmann/google-ping-action@master
              with:
                  sitemap-url: ${{ secrets.SITEMAP_URL }}
```

### further documentation
https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action
