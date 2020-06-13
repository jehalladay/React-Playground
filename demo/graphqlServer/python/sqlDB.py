import sqlite3




class DB:
    def __init__(self, db='DB.db'):
        self.connection     =  sqlite3.connect(db)
        self.cursor         =  self.connection.cursor()
        self.execute        =  self.cursor.execute
        self.execute_many   =  self.cursor.executemany
        self.fetch          =  self.cursor.fetchone
        self.fetch_many     =  self.cursor.fetchmany
        self.fetch_all      =  self.cursor.fetchall
        

    def put_values(self, location: str, row: tuple):
        

        self.execute(f'''
            INSERT INTO {location} VALUES (?,?,?)
        ''', row)

        return self

    def put_values2(self, location: str, row: tuple):
        
        values = ''
        for value in row:
            values += f'{value}'

        self.execute(f'''
            INSERT INTO {location} VALUES ({values})
        ''')

        return self

    def put_many_values(self, location: str, rows: list):

        self.execute(f'''
            INSERT INTO {location} VALUES (?,?,?)
        ''', rows)

        return self


    def select_all(self, location: str):
        self.execute(f'''
            Select * FROM {location}
        ''')

        data = self.fetch_all()

        return data



    def commit(self):
        self.connection.commit()

        return self


    def close(self):
        self.connection.close()

        return self

# crs.execute('''
# CREATE TABLE "Country" (
# 	"Name"	TEXT NOT NULL,
# 	"Year"	INTEGER NOT NULL,
# 	"Population"	INTEGER NOT NULL
# )
# ''')


db = DB()

pop_data = db.select_all('Population')

for country in pop_data:

    print(country, '\n') if country[0] == 'Zimbabwe' else None
