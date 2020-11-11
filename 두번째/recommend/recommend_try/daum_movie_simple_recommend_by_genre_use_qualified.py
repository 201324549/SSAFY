import pandas as pd
import sys

genre = sys.argv[1]
percentile = 0.95
count = 10

gen_md = pd.read_csv('../resources/daum_movie_qualified.csv')
df = gen_md[gen_md['genre'] == genre]

vote_counts = df[df['count'].notnull()]['count'].astype('int')
vote_averages = df[df['rate'].notnull()]['rate'].astype('int')
C = vote_averages.mean()
m = vote_counts.quantile(percentile)
qualified = df[(df['count'] >= m) & (df['count'].notnull()) & (
    df['rate'].notnull())][['movie_id', 'movie_name', 'img_url', 'count', 'rate']]
qualified['count'] = qualified['count'].astype('int')
qualified['rate'] = qualified['rate'].astype('int')
qualified['wr'] = qualified.apply(lambda x: (
    x['count']/(x['count']+m) * x['rate']) + (m/(m+x['count']) * C), axis=1)
qualified = qualified.sort_values('wr', ascending=False).head(10)

pd.set_option("display.max_colwidth", 500)

l1 = qualified['movie_id'].head(
    count).to_string(index=False, header=False).split("\n")
l2 = qualified['movie_name'].head(
    count).to_string(index=False, header=False).split("\n")
l3 = qualified['img_url'].head(
    count).to_string(index=False, header=False).split("\n")

for i in l1:
    print(i.strip())
for i in l2:
    print(i.strip())
for i in l3:
    print(i.strip())
