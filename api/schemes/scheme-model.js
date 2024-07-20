const db = require('../../data/db-config');

async function find() { // EXERCISE A
  const result = await db({ sc: 'schemes' })
    .leftJoin({ st: 'steps' }, 'sc.scheme_id', 'st.scheme_id')
    .groupBy('sc.scheme_id')
    .orderBy('sc.scheme_id')
    .count({ number_of_steps: 'st.step_id' })
    .select('sc.*')

  return result;
}

async function findById(id) { // EXERCISE B
  const data = await db({ sc: 'schemes' })
    .leftJoin({ st: 'steps' }, 'sc.scheme_id', 'st.scheme_id')
    .where({ 'sc.scheme_id': id })
    .orderBy('st.step_number')
    .select(
      'step_id',
      'step_number',
      'instructions',
      'sc.scheme_name',
      'sc.scheme_id as scheme_id'
    );

  const result = data.reduce((acc, row) => {
    if (row.instructions) {
      acc.steps.push({
        step_id: row.step_id,
        step_number: row.step_number,
        instructions: row.instructions
      })
    }
    return acc;
  }, {
    scheme_id: data[0].scheme_id,
    scheme_name: data[0].scheme_name,
    steps: []
  });

  return result;
}

function findSteps(scheme_id) { // EXERCISE C
  /*
    1C- Build a query in Knex that returns the following data.
    The steps should be sorted by step_number, and the array
    should be empty if there are no steps for the scheme:

      [
        {
          "step_id": 5,
          "step_number": 1,
          "instructions": "collect all the sheep in Scotland",
          "scheme_name": "Get Rich Quick"
        },
        {
          "step_id": 4,
          "step_number": 2,
          "instructions": "profit",
          "scheme_name": "Get Rich Quick"
        }
      ]
  */
}

function add(scheme) { // EXERCISE D
  /*
    1D- This function creates a new scheme and resolves to _the newly created scheme_.
  */
}

function addStep(scheme_id, step) { // EXERCISE E
  /*
    1E- This function adds a step to the scheme with the given `scheme_id`
    and resolves to _all the steps_ belonging to the given `scheme_id`,
    including the newly created one.
  */
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
}
