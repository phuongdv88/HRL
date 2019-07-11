import React, { useEffect, useMemo, useState } from 'react';
import {
    Button,
    Card,
    CardContent,
    OutlinedInput,
    Icon,
    TextField,
    Typography,
    CardActions,
    Select,
    InputLabel,
    FormControl,
    MenuItem,
    Container
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import { FuseAnimate, FuseAnimateGroup } from '@fuse';
import { useDispatch, useSelector } from 'react-redux';
import withReducer from 'app/store/withReducer';
import clsx from 'clsx';
import _ from '@lodash';
import { Link } from 'react-router-dom';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';
import { ca } from 'date-fns/esm/locale';
import cardReducer from '../../scrumboard/store/reducers/card.reducer';

const useStyles = makeStyles(theme => ({
    header: {
        background: 'linear-gradient(to right, ' + theme.palette.primary.dark + ' 0%, ' + theme.palette.primary.main + ' 100%)',
        color: theme.palette.getContrastText(theme.palette.primary.main)
    },
    headerIcon: {
        position: 'absolute',
        top: -64,
        left: 0,
        opacity: .04,
        fontSize: 512,
        width: 512,
        height: 512,
        pointerEvents: 'none'
    }
}));

function Jobs(props) {
    const dispatch = useDispatch();
    const jobs = useSelector(({ jobDescription }) => jobDescription.jobs.data);
    const levels = useSelector(({ jobDescription }) => jobDescription.jobs.levels);

    const classes = useStyles(props);
    const theme = useTheme();

    const [filteredData, setFilteredData] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('all');

    useEffect(() => {
        dispatch(Actions.getLevels());
        dispatch(Actions.getJobs());
        console.log("get currently category and jobs");
    }, [dispatch]); // when dispatch is changed, dispatch all this actions??;

    useEffect(() => {
        function getFilteredArray() {    // get all jobs after filter by ui
            if (searchText.length === 0 && selectedLevel === 'all') {
                return jobs;
            }
            return _.filter(jobs, item => {
                if (selectedLevel !== 'all' && item.category !== selectedLevel) {
                    return false;
                }
                return item.title.toLowerCase().includes(searchText.toLowerCase())
            });
        }

        if (jobs) {
            setFilteredData(getFilteredArray());
        }
    }, [jobs, searchText, selectedLevel]); // change filtered data when change these info

    function hanleSelectedLevel(e) {
        setSelectedLevel(e.target.value);
    }

    function handleSearchText(e) {
        setSearchText(e.target.value);
    }
    return (
        <div className="flex flex-col flex-1 w-full my-auto">
            <div id='header' style={{ backgroundImage: 'url(assets/images/backgrounds/header-background-2.jpg)' }}
                className={clsx(classes.header, "relative overflow-hidden flex flex-col flex-shrink-0 items-center justify-center text-center p-16 sm:p-24 h-200 sm:h-288 bg-auto")}>
                <FuseAnimate animation='transition.slideUpIn' duration={400} delay={100}>
                    <Typography color='inherit' className="text-24 sm:text-40 font-light" >
                        Giới thiệu công việc cho người quen
                </Typography>
                </FuseAnimate>
                <FuseAnimate duration={400} delay={600}>
                    <Typography variant="subtitle1" color="inherit" className="mt-8 sm:mt-16 mx-auto max-w-512">
                        <span className="opacity-75">
                            Hãy tìm công việc phù hợp với những người bạn biết để kết nối họ một cách dễ dàng.
                            </span>
                    </Typography>
                </FuseAnimate>
            </div>
            <div className="flex flex-col flex-1 max-w-2xl mx-auto px-8 sm:px-16 py-24 w-full">
                <div id='searching-part' className="flex flex-col flex-shrink-0 sm:flex-row items-center justify-between py-24">
                    <TextField
                        label="Tìm kiếm công việc"
                        placeholder="Nhập từ khóa..."
                        className="flex w-full"
                        value={searchText}
                        inputProps={{ 'aria-label': 'Search' }}
                        onChange={handleSearchText}
                        variant='outlined'
                        InputLabelProps={{ shrink: true }}
                    />
                    <FormControl className="flex w-full sm:w-320 mx-16" variant='outlined'>
                        <InputLabel htmlFor='level-label-placeholer'>
                            Vị trí
                    </InputLabel>
                        <Select value={selectedLevel}
                            onChange={hanleSelectedLevel}
                            input={<OutlinedInput labelWidth={"level".length * 9}
                                name="jobLevel"
                                id="level-label-placeholer" />}
                        >
                            <MenuItem value='all'> <em>Tất cả</em></MenuItem>
                            {
                                levels.map((level, i) => (
                                    <MenuItem value={level} key={i}>{level}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </div>
                {
                    // generate job cards
                    useMemo(()=>(
                        filteredData && (filteredData.length > 0 ? (
                            <FuseAnimateGroup enter={{animation: "transition.slideUpBigIn"}}
                            className="flex flex-col py-24">
                             {filteredData.map((job) =>{
                                 return(
                                     <div key={job.id} className="w-full pb-24">
                                         <Card className="flex flex-col h-150" elevation={1}>
                                         <div
                                                        className="flex flex-shrink-0 items-center justify-between px-24 h-64"
                                                    >
                                                        <Typography className="font-medium truncate" color="inherit">{job.title}</Typography>
                                                        <div className="flex items-center justify-center opacity-75">
                                                            <Icon className="text-20 mr-8" color="secondary">fiber_new</Icon>
                                                        </div>
                                                    </div>
                                             <CardContent>
                                                 <Typography className="flex flex-col flex-auto items-center justify-center" color="textSecondary">
                                                     {job.brief}
                                                 </Typography>
                                             </CardContent>
                                             <CardActions className="justify-center">
                                                 <Button to={`/apps/hrlancer/job/${job.id}`}
                                                 component={Link}
                                                 className="justify-start px-32"
                                                 color = "secondary"
                                                 >Chi tiết</Button>
                                             </CardActions>
                                         </Card>
                                     </div>

                                 )
                             })}   
                            </FuseAnimateGroup>
                        ) : 
                        (
                           <div className="flex flex-1 items-center justify-center"     >
                               <Typography color="textSecondary" className="text-24 my-24">
                                   Không tìm thấy công việc nào
                               </Typography>
                           </div>
                        )
                        )), [levels, filteredData, theme.palette])

                }              

            </div>
        </div>
    
    )
}

export default withReducer('jobDescription', reducer)(Jobs);